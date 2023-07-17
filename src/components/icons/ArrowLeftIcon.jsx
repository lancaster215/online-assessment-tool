import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

/**
 *
 * @param {import('@mui/material').SvgIconProps} props
 * @returns {JSX.Element}
 *
 */
export default function ArrowLeftIcon({ sx, ...props }) {
  return (
    <SvgIcon viewBox="0 0 24 24" sx={{ width: '24px', height: '24px', ...sx }} {...props}>
      <path d="M6.31077 10.7501L12.5304 4.53039L11.4698 3.46973L3.43945 11.5001L11.4698 19.5304L12.5304 18.4697L6.31077 12.2501H19.5001V10.7501H6.31077Z" />
    </SvgIcon>
  );
}

ArrowLeftIcon.propTypes = {
  sx: PropTypes.instanceOf(Object),
};

ArrowLeftIcon.defaultProps = {
  sx: {},
};
