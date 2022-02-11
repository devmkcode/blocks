const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const { InspectorControls } = wp.editor;
const { PanelBody, PanelRow, TextControl } = wp.components;

registerBlockType( 'dev/info', {
  title: __("Info block", 'dev'),
  description: __( "Adding info block", 'dev' ),
  // common, formatting, layout, widgets, embed
  category: 'common',
  icon: 'universal-access',
  keywords: [
    __( 'info', 'dev' ),
  ],
  supports: {
    html: false
  },
  attributes: {
    name: {
      source: 'text',
      selector: '.cb_name'
    },
    age: {
      source: 'text',
      selector: '.cb_age'
    },
    city: {
      source: 'text',
      selector: '.cb_city'
    }

  },
  edit: ( props ) => {
    return [
      <InspectorControls>
        <PanelBody title={__( 'Basics', 'dev' )}>
          <PanelRow>
            Write city info
          </PanelRow>

          <TextControl 
            label={ __( 'Name', 'dev' )}
            help={ __( 'Podaj imie', 'dev' ) }
            value={ props.attributes.name }
            onChange={ new_val => {
              props.setAttributes({ name: new_val })
            }}
          />

          <TextControl 
            label={ __( 'Wiek', 'dev' )}
            help={ __( 'Podaj wiek', 'dev' ) }
            value={ props.attributes.age }
            onChange={ new_val => {
              props.setAttributes({ age: new_val })
            }}
          />

          <TextControl 
            label={ __( 'Miasto', 'dev' )}
            help={ __( 'Podaj miasto', 'dev' ) }
            value={ props.attributes.city }
            onChange={ new_val => {
              props.setAttributes({ city: new_val })
            }}
          />
        </PanelBody>
      </InspectorControls>,
      <div className={props.className}>
        <ul>
          <li>Imie: <span className="cb_name"> {props.attributes.name}</span></li>
          <li>Wiek: <span className="cb_age"> {props.attributes.age}</span></li>
          <li>Miasto: <span className="cb_city"> {props.attributes.city}</span></li>
        </ul>
      </div>
    ];
  },
  save: ( props ) => {
    return (
      <div className={props.className}>
        <ul>
          <li>Imie: <span className="cb_name"> {props.attributes.name}</span></li>
          <li>Wiek: <span className="cb_age"> {props.attributes.age}</span></li>
          <li>Miasto: <span className="cb_city"> {props.attributes.city}</span></li>
        </ul>
      </div>
    )
  }
} );