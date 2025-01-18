import React from 'react';
import Typography from '@mui/material/Typography';
import styles from './../../styles.module.css';

const RemarksSection = ({ remark }) => {
  return (
    <>
      {remark !== '-' && remark !== '0' && remark !== '' && remark !== null && remark !== undefined && (
        <Typography className={`${styles.detail_lable}`}>
          <span style={{ fontWeight: 'bold', paddingTop: '10px' }}>Remarks: </span>
          {remark}
        </Typography>
      )}
    </>
  );
};

export default RemarksSection;