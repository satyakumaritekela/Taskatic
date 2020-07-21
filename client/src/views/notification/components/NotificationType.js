import React, { Fragment } from 'react';
import moment from 'moment'
import { Badge } from 'react-bootstrap';

import { notificationType, colorScheme, status } from '../../../constants/defaultValues'

const NotificationTypeRenderer = ({ item }) => {
  const { type, date, fromStatus, toStatus } = item
  const variant = type === 'ASSIGNED_USER' ? 'primary' : 'light'
  return <Fragment>
    <Badge
      className="d-flex"
      variant={variant}
      style={{ color: variant === 'primary' ? 'white' : 'var(--primary)' }}
    >
      {notificationType[type]}
    </Badge>
    {type === 'ASSIGNED_USER'
      ? <Fragment>
        <div style={{ marginLeft: '10px', fontSize: '14px' }}>
          <i className="fa fa-user-alt" />
        </div>
        <div className="pointer" style={{ marginLeft: '8px', fontWeight: '500', fontSize: '13px', paddingBlock: '3px' }}>
          {'you'}
        </div>
      </Fragment>
      : type === 'DUE_DATE_CHANGED'
        ? <div className="d-flex" style={{ marginLeft: '10px', alignItems: 'center' }}>
          <div style={{ fontSize: '12px', marginRight: '10px' }}>
            <i className="fa fa-calendar-check" />
          </div>
          <div style={{ fontWeight: '400', fontSize: '12px' }}>{moment(date).format('MMM D')}</div>
        </div>
        : <Fragment>
          <div style={{ marginLeft: '10px' }}>
            <div className="status" style={{ backgroundColor: colorScheme[fromStatus] }}>
              {status[fromStatus]}
            </div>
          </div>
          <i className="fa fa-arrow-right" style={{ margin: '0 10px' }} />
          <div>
            <div className="status" style={{ backgroundColor: colorScheme[toStatus] }}>
              {status[toStatus]}
            </div>
          </div>
        </Fragment>
    }
  </Fragment>
}

export default NotificationTypeRenderer