/**
 * WordPress dependencies
 */

import {
	__experimentalHeading as Heading,
	__experimentalText as Text,
	__experimentalVStack as VStack,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { symbol } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import Grid from './grid';
import NoPatterns from './no-patterns';
import usePatterns from './use-patterns';

export default function PatternsList( { categoryId, label, type } ) {
	const [ patterns, isResolving ] = usePatterns( type, categoryId );
	const { syncedPatterns, unsyncedPatterns } = patterns;
	const hasPatterns = !! syncedPatterns.length || !! unsyncedPatterns.length;

	return (
		<VStack spacing={ 6 }>
			{ isResolving && __( 'Loading' ) }
			{ ! isResolving && !! syncedPatterns.length && (
				<>
					<VStack className="edit-site-library__section-header">
						<Heading level={ 5 }>{ __( 'Synced' ) }</Heading>
						<Text as="p">
							{ __(
								'Make a change to one of these patterns and have it reflected across your entire site.'
							) }
						</Text>
					</VStack>
					<Grid
						icon={ symbol }
						categoryId={ categoryId }
						label={ label }
						items={ syncedPatterns }
					/>
				</>
			) }
			{ ! isResolving && !! unsyncedPatterns.length && (
				<>
					<VStack className="edit-site-library__section-header">
						<Heading level={ 5 }>{ __( 'Standard' ) }</Heading>
						<Text as="p">
							{ __(
								'Insert and customize without stating in sync'
							) }
						</Text>
					</VStack>
					<Grid
						categoryId={ categoryId }
						label={ label }
						items={ unsyncedPatterns }
					/>
				</>
			) }
			{ ! isResolving && ! hasPatterns && <NoPatterns /> }
		</VStack>
	);
}
