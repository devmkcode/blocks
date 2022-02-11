const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { InnerBlocks } = wp.editor;
const { PanelBody, PanelRow, TextControl } = wp.components;

registerBlockType( 'custom/container', {
  title: __("Container Block", 'dev'),
  description: __( "Adding container block", 'dev' ),
  // common, formatting, layout, widgets, embed
  category: 'common',
  icon: 'welcome-add-page',
  keywords: [
    __( 'container', 'dev' ),
    __( 'wrap', 'dev' ),
    __( 'row', 'dev' ),
  ],
  supports: {
  },
  attributes: {
    name: {
      source: 'text',
      selector: '.cb_name'
    },
  },
  edit: ( { className } ) => {
    if (className.isActive){
      className += ' container';
    }
    return [
      <div className={ className }>
        <InnerBlocks template={[
            [ 'core/heading', { level: 2, content: 'Example Nested Block Template' } ],
            [ 'core/paragraph', { content: 'Lorem ipsum dolor sit amet labore cras venenatis.' } ],
            [ 'core/columns', {},
                [
                    [ 'core/column', {}, [
                            [ 'core/heading', { level: 3, content: 'Sub Heading 1' } ],
                            [ 'core/paragraph', { content: 'Lorem ipsum dolor sit amet id erat aliquet diam ullamcorper tempus massa eleifend vivamus.' } ],
                        ]
                    ],
                    [ 'core/column', {}, [
                            [ 'core/heading', { level: 3, content: 'Sub Heading 2' } ],
                            [ 'core/paragraph', { content: 'Morbi augue cursus quam pulvinar eget volutpat suspendisse dictumst mattis id.' } ],
                        ]
                    ],
                ]
            ],
        ]}/>
      </div>
    ];
  },
  save: ( props ) => {
    return (
      <div className="container">
        <div className="row">
          <InnerBlocks.Content />
        </div>
      </div>
    )
  }
} );