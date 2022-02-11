<?php

function dev_enqueue_block_editor_assets(){
  wp_register_script( 'dev_blocks_bundle', get_template_directory_uri()."/blocks/dist/bundle.js",
    [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-editor', 'wp-api' ],
    filemtime( get_template_directory()."/blocks/dist/bundle.js" )
  );
  wp_enqueue_script( 'dev_blocks_bundle' );
}
add_action( 'enqueue_block_editor_assets', 'dev_enqueue_block_editor_assets' );