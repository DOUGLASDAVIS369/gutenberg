/**
 * WordPress dependencies
 */
import { memo, useRef, useMemo, useCallback } from '@wordpress/element';
import { __experimentalHStack as HStack, Button } from '@wordpress/components';
import { funnel } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import FilterSummary from './filter-summary';
import { default as AddFilter, AddFilterDropdownMenu } from './add-filter';
import ResetFilters from './reset-filters';
import { sanitizeOperators } from './utils';
import { ALL_OPERATORS, OPERATOR_IS, OPERATOR_IS_NOT } from './constants';
import type { NormalizedField, NormalizedFilter, View } from './types';

interface FiltersProps< Item > {
	fields: NormalizedField< Item >[];
	view: View;
	onChangeView: ( view: View ) => void;
	openedFilter: string | null;
	setOpenedFilter: ( openedFilter: string | null ) => void;
}

export function useFilters( fields: NormalizedField< any >[], view: View ) {
	return useMemo( () => {
		const filters: NormalizedFilter[] = [];
		fields.forEach( ( field ) => {
			if ( ! field.elements?.length ) {
				return;
			}

			const operators = sanitizeOperators( field );
			if ( operators.length === 0 ) {
				return;
			}

			const isPrimary = !! field.filterBy?.isPrimary;
			filters.push( {
				field: field.id,
				name: field.header,
				elements: field.elements,
				singleSelection: operators.some( ( op ) =>
					[ OPERATOR_IS, OPERATOR_IS_NOT ].includes( op )
				),
				operators,
				isVisible:
					isPrimary ||
					!! view.filters?.some(
						( f ) =>
							f.field === field.id &&
							ALL_OPERATORS.includes( f.operator )
					),
				isPrimary,
			} );
		} );
		// Sort filters by primary property. We need the primary filters to be first.
		// Then we sort by name.
		filters.sort( ( a, b ) => {
			if ( a.isPrimary && ! b.isPrimary ) {
				return -1;
			}
			if ( ! a.isPrimary && b.isPrimary ) {
				return 1;
			}
			return a.name.localeCompare( b.name );
		} );
		return filters;
	}, [ fields, view ] );
}

export function FilterVisibilityToggle( {
	filters,
	view,
	onChangeView,
	setOpenedFilter,
	isShowingFilter,
	setIsShowingFilter,
}: {
	filters: NormalizedFilter[];
	view: View;
	onChangeView: ( view: View ) => void;
	setOpenedFilter: ( filter: string | null ) => void;
	isShowingFilter: boolean;
	setIsShowingFilter: React.Dispatch< React.SetStateAction< boolean > >;
} ) {
	const onChangeViewWithFilterVisibility = useCallback(
		( _view: View ) => {
			onChangeView( _view );
			setIsShowingFilter( true );
		},
		[ onChangeView, setIsShowingFilter ]
	);

	const hasFilters = view.filters?.length;
	if ( ! hasFilters ) {
		return (
			<AddFilterDropdownMenu
				filters={ filters }
				view={ view }
				onChangeView={ onChangeViewWithFilterVisibility }
				setOpenedFilter={ setOpenedFilter }
				trigger={
					<Button
						size="compact"
						icon={ funnel }
						label={ __( 'Toggle filter display' ) }
						isPressed={ false }
						aria-expanded={ false }
					/>
				}
			/>
		);
	}
	return (
		<>
			<Button
				size="compact"
				icon={ funnel }
				label={ __( 'Toggle filter display' ) }
				onClick={ () => {
					if ( ! isShowingFilter ) {
						setOpenedFilter( null );
					}
					setIsShowingFilter( ! isShowingFilter );
				} }
				isPressed={ isShowingFilter }
				aria-expanded={ isShowingFilter }
			/>
			{ !! view.filters?.length && (
				<span className="dataviews-filters-toggle__count">
					{ view.filters.length }
				</span>
			) }
		</>
	);
}

function _Filters< Item >( {
	fields,
	view,
	onChangeView,
	openedFilter,
	setOpenedFilter,
}: FiltersProps< Item > ) {
	const addFilterRef = useRef< HTMLButtonElement >( null );
	const filters = useFilters( fields, view );
	const addFilter = (
		<AddFilter
			key="add-filter"
			filters={ filters }
			view={ view }
			onChangeView={ onChangeView }
			ref={ addFilterRef }
			setOpenedFilter={ setOpenedFilter }
		/>
	);
	const visibleFilters = filters.filter( ( filter ) => filter.isVisible );
	if ( visibleFilters.length === 0 ) {
		return null;
	}

	const filterComponents = [
		...visibleFilters.map( ( filter ) => {
			return (
				<FilterSummary
					key={ filter.field }
					filter={ filter }
					view={ view }
					onChangeView={ onChangeView }
					addFilterRef={ addFilterRef }
					openedFilter={ openedFilter }
				/>
			);
		} ),
		addFilter,
	];

	filterComponents.push(
		<ResetFilters
			key="reset-filters"
			filters={ filters }
			view={ view }
			onChangeView={ onChangeView }
		/>
	);

	return (
		<HStack
			justify="flex-start"
			style={ { width: 'fit-content' } }
			className="dataviews-filters__container"
			wrap
		>
			{ filterComponents }
		</HStack>
	);
}

// A type assertion is used here to keep the type argument.
const Filters = memo( _Filters ) as typeof _Filters;

export default Filters;
