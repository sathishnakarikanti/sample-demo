import React, { Component } from 'react';
// import React, { useState, useEffect } from 'react'; <-- If using hooks you can change to functional component and import what's necessary
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Proptypes and default props act as docs and should be at
// the top of the component
const propTypes = {
  type: PropTypes.bool,
};

const defaultProps = {
  type: undefined,
};

// not sure if I like having this above the component (thoughts?)
const StyledElement = styled.div`
  /* ... */
`
// you can export your component like this if you don’t want to do it at the bottom
// export default class exampleComponent extends Component {…}

class ExampleComponent extends Component {
  // use a constructor if necessary
  constructor(props) {
    super(props);

    this.state = {
      example: someInfo,
    };
  }
  
  // State Hook - use state hook and change to functional component
  // const [stateItem, setStateItem] = useState(initialState);

  componentDidMount() {
    // we will probably stay away from the useEffect Hook (and all hooks for that matter) for now
    // and just use the old lifecycle methods, we can start refactoring with hooks when we get this working
  }
  
  // Instead of componentDidMount we can now implement useEffect for our lifecycle methods
  // useEffect(() => {
  //   update.item = `{stateItem} to update`;
  // });

  exampleMethod = () => something.to.return

  render() {
    const { desctructureThis } = this; // probably not necessary but cleans up the component a bit more
    const { destructureProps } = this.props;
    const { destructureState } = this.state;

    return (
      <StyledElement>
        Some JSX/HTML, Use Fragments if necessary.
      </StyledElement>
    );
  }
}

ExampleComponent.propTypes = propTypes;
ExampleComponent.defaultProps = defaultProps;

export default ExampleComponent;