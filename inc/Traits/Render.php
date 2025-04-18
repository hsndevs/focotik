<?php
/**
 * Render trait.
 *
 * @package wordpress-plugin
 */

namespace Focotik\Traits;

trait Render {
	/**
	 * Path to the views directory.
	 *
	 * @var string
	 */
	private static $view_path = FOCOTIK_THEME_PATH . '/views/';

	/**
	 * Render the template.
	 *
	 * @param string $file File name.
	 * @param array  $args Arguments.
	 * @return void
	 */
	public function render( $file, $args = array() ) {

		$file = self::$view_path . $file . '.php';

		if ( file_exists( $file ) ) {
			foreach ( $args as $key => $value ) {
				${$key} = $value;
			}

			include_once $file;
		}
	}
}

