import React, { Fragment } from 'react';
import moment from 'moment'

import Tooltip from '../../../common/Tooltip'
import NotificationTypeRenderer from './NotificationType'

const NotificationItem = ({ item, markAsRead }) => {
  const { id, task, user, createdAt, unread } = item
  return <div className="notification">
    <div className="item-header">
      <div className="item-title">
        <Tooltip placement="top" tooltip="Go to Task">
          <span>{task}</span>
        </Tooltip>
      </div>
      {unread
        ? <Fragment>
          <Tooltip placement="top" tooltip="Mark As Read">
            <div id="mark_as_read" className="item-close" onClick={() => markAsRead(id)}>
              <i className="fa fa-eye-slash" />
            </div>
          </Tooltip>
        </Fragment>
        : undefined
      }
    </div>
    <div className="item-body">
      <div>
        <div><i className="fa fa-user-circle" style={{ fontSize: '1.5rem' }} /></div>
        <div className="author">{user}</div>
        <div className="type">
          <NotificationTypeRenderer item={item} />
        </div>
        <div className="divider" />
        <div className="time">{moment(createdAt).format('MMM D [at] h:mm a')}</div>
      </div>
    </div>
  </div>
}

export default NotificationItem