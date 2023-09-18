/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	__experimentalHStack as HStack,
	__experimentalHeading as Heading,
	__experimentalUseNavigator as useNavigator,
	__experimentalVStack as VStack,
} from '@wordpress/components';
import { isRTL, __, sprintf } from '@wordpress/i18n';
import { chevronRight, chevronLeft } from '@wordpress/icons';
import { store as coreStore } from '@wordpress/core-data';
import { useSelect } from '@wordpress/data';
import { privateApis as routerPrivateApis } from '@wordpress/router';

/**
 * Internal dependencies
 */
import { store as editSiteStore } from '../../store';
import { unlock } from '../../lock-unlock';
import SidebarButton from '../sidebar-button';
import {
	isPreviewingTheme,
	currentlyPreviewingTheme,
} from '../../utils/is-previewing-theme';

const { useLocation } = unlock( routerPrivateApis );

export default function SidebarNavigationScreen( {
	isRoot,
	title,
	actions,
	meta,
	content,
	footer,
	description,
	backPath: backPathProp,
} ) {
	const { dashboardLink, dashboardLinkText } = useSelect( ( select ) => {
		const { getSettings } = unlock( select( editSiteStore ) );
		return {
			dashboardLink: getSettings().__experimentalDashboardLink,
			dashboardLinkText: getSettings().__experimentalDashboardLinkText,
		};
	}, [] );
	const { getTheme } = useSelect( coreStore );
	const location = useLocation();
	const navigator = useNavigator();
	const theme = getTheme( currentlyPreviewingTheme() );
	const icon = isRTL() ? chevronRight : chevronLeft;

	return (
		<>
			<VStack
				className={ classnames(
					'edit-site-sidebar-navigation-screen__main',
					{
						'has-footer': !! footer,
					}
				) }
				spacing={ 0 }
				justify="flex-start"
			>
				<HStack
					spacing={ 4 }
					alignment="flex-start"
					className="edit-site-sidebar-navigation-screen__title-icon"
				>
					{ ! isRoot && (
						<SidebarButton
							onClick={ () => {
								const backPath =
									backPathProp ?? location.state?.backPath;
								if ( backPath ) {
									navigator.goTo( backPath, {
										isBack: true,
									} );
								} else {
									navigator.goToParent();
								}
							} }
							icon={ icon }
							label={ __( 'Back' ) }
							showTooltip={ false }
						/>
					) }
					{ isRoot && (
						<SidebarButton
							icon={ icon }
							label={
								dashboardLinkText || __( 'Go to the Dashboard' )
							}
							href={ dashboardLink || 'index.php' }
						/>
					) }
					<Heading
						className="edit-site-sidebar-navigation-screen__title"
						level={ 1 }
						size={ 20 }
					>
						{ ! isPreviewingTheme()
							? title
							: sprintf(
									'Previewing %1$s: %2$s',
									theme?.name?.rendered,
									title
							  ) }
					</Heading>
					{ actions && (
						<div className="edit-site-sidebar-navigation-screen__actions">
							{ actions }
						</div>
					) }
				</HStack>
				{ meta && (
					<>
						<div className="edit-site-sidebar-navigation-screen__meta">
							{ meta }
						</div>
					</>
				) }

				<div className="edit-site-sidebar-navigation-screen__content">
					{ description && (
						<p className="edit-site-sidebar-navigation-screen__description">
							{ description }
						</p>
					) }
					{ content }
				</div>
			</VStack>
			{ footer && (
				<footer className="edit-site-sidebar-navigation-screen__footer">
					{ footer }
				</footer>
			) }
		</>
	);
}
