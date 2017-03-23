import React, { PropTypes as RPT } from 'react';
import { Flex, Box } from 'radium-flex';

const HideBox = ({ children, ...rest }) => (
  <Flex>
    <Box {...rest}>
      {children}
    </Box>
  </Flex>
);

HideBox.propTypes = {
  children: RPT.node.isRequired
};

export default HideBox;
