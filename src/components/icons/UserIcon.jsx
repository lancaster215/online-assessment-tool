import PropTypes from 'prop-types';
import { SvgIcon } from '@mui/material';

/**
 *
 * @param {import('@mui/material').SvgIconProps} props
 * @returns {JSX.Element}
 *
 */
export default function UserIcon({ sx, ...props }) {
  return (
    <SvgIcon viewBox="0 0 28 28" sx={{ width: '28px', height: '28px', ...sx }} {...props}>
      <path
        d="M8.75 9.33333C8.75 6.43384 11.1005 4.08333 14 4.08333C16.8995 4.08333 19.25 6.43384 19.25 9.33333C19.25 12.2328 16.8995 14.5833 14 14.5833C11.1005 14.5833 8.75 12.2328 8.75 9.33333ZM14 5.83333C12.067 5.83333 10.5 7.40034 10.5 9.33333C10.5 11.2663 12.067 12.8333 14 12.8333C15.933 12.8333 17.5 11.2663 17.5 9.33333C17.5 7.40034 15.933 5.83333 14 5.83333Z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <path
        d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14ZM14 1.75C7.23451 1.75 1.75 7.23451 1.75 14C1.75 17.7245 3.41217 21.0608 6.03518 23.3075L9.10298 16.0417H19.3881L22.0915 23.1975C24.6412 20.9526 26.25 17.6642 26.25 14C26.25 7.23451 20.7655 1.75 14 1.75ZM20.6366 24.2983L18.1785 17.7917H10.2637L7.48399 24.3751C9.37126 25.5629 11.6054 26.25 14 26.25C16.4458 26.25 18.7242 25.5332 20.6366 24.2983Z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </SvgIcon>
  );
}

UserIcon.propTypes = {
  sx: PropTypes.instanceOf(Object),
};

UserIcon.defaultProps = {
  sx: {},
};
