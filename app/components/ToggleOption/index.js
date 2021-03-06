/* eslint-disable react/prop-types */
/**
 *
 * ToggleOption
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

const ToggleOption = ({ value, message, intl }) => (
  <option className="currency__option" value={value}>
    {message ? intl.formatMessage(message) : value}
  </option>
);

ToggleOption.propTypes = {
  message: PropTypes.object,
  intl: intlShape.isRequired,
};

export default injectIntl(ToggleOption);
