<?php
/**
 * Server-side rendering of the `core/cover` block.
 *
 * @package WordPress
 */

/**
 * Renders the `core/cover` block on server.
 *
 * @since 6.0.0
 *
 * @param array  $attributes The block attributes.
 * @param string $content    The block rendered content.
 *
 * @return string Returns the cover block markup, if useFeaturedImage is true.
 */
function render_block_core_cover( $attributes, $content ) {
	if ( 'image' !== $attributes['backgroundType'] || false === $attributes['useFeaturedImage'] ) {
		return $content;
	}

	if ( isset( $attributes['focalPoint'] ) ) {
		$object_position = round( $attributes['focalPoint']['x'] * 100 ) . '% ' . round( $attributes['focalPoint']['y'] * 100 ) . '%';
	}

	if ( ! ( $attributes['hasParallax'] || $attributes['isRepeated'] ) ) {
		$attr = array(
			'class'           => 'wp-block-cover__image-background',
			'data-object-fit' => 'cover',
		);

		if ( isset( $object_position ) ) {
			$attr['data-object-position'] = $object_position;
			$attr['style']                = 'object-position: ' . $object_position . ';';
		}

		$image = get_the_post_thumbnail( null, 'post-thumbnail', $attr );
	} else {
		if ( in_the_loop() ) {
			update_post_thumbnail_cache();
		}
		$current_featured_image = get_the_post_thumbnail_url();
		if ( ! $current_featured_image ) {
			return $content;
		}

		$processor = new WP_HTML_Tag_Processor( '<div></div>' );
		$processor->next_tag();

		$current_caption = get_the_post_thumbnail_caption();
		if ( $current_caption ) {
			$processor->set_attribute( 'role', 'img' );
			$processor->set_attribute( 'aria-label', $current_caption );
		}

		$processor->add_class( 'wp-block-cover__image-background' );
		if ( $attributes['hasParallax'] ) {
			$processor->add_class( 'has-parallax' );
		}
		if ( $attributes['isRepeated'] ) {
			$processor->add_class( 'is-repeated' );
		}

		$background_position = '50% 50%';
		if ( isset( $object_position ) ) {
			$background_position = $object_position;
		}
		$styles = 'background-position:' . $background_position . ';';
		if ( $current_featured_image ) {
			$styles .= 'background-image:url(' . esc_url( $current_featured_image ) . ');';
		}
		$processor->set_attribute( 'style', $styles );

		$image = $processor->get_updated_html();
	}

	/*
	 * Inserts the featured image between the (1st) cover 'background' `span` and 'inner_container' `div`,
	 * and removes eventual whitespace characters between the two (typically introduced at template level)
	 */
	$inner_container_start = '/<div\b[^>]+wp-block-cover__inner-container[\s|"][^>]*>/U';
	if ( 1 === preg_match( $inner_container_start, $content, $matches, PREG_OFFSET_CAPTURE ) ) {
		$offset  = $matches[0][1];
		$content = substr( $content, 0, $offset ) . $image . substr( $content, $offset );
	}

	return $content;
}

/**
 * Registers the `core/cover` block renderer on server.
 *
 * @since 6.0.0
 */
function register_block_core_cover() {
	register_block_type_from_metadata(
		__DIR__ . '/cover',
		array(
			'render_callback' => 'render_block_core_cover',
		)
	);
}
add_action( 'init', 'register_block_core_cover' );
