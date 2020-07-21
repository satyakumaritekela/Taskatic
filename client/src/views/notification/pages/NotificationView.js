import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import dummyNotifications from '../../../constants/notifications';
import NotificationItem from '../components/NotificationItem';

const NotificationView = () => {
  const [showNew, setShowNew] = useState(true)
  const [notifications, setNotifications] = useState(dummyNotifications)

  const markAsRead = (id) => {
    setNotifications(notifications.map(item =>
      item.id === id
        ? ({ ...item, unread: false })
        : item
    ))
  }

  return <Container className="notification-container">
    <div className="notification-header">
      <span className="title">Notifications</span>
    </div>
    <div className="notification-sub-header">
      <div className="d-flex" style={{ alignItems: 'center' }}>
        <div
          className={`sub-header-item${showNew ? '-selected' : ''}`}
          onClick={() => !showNew ? setShowNew(!showNew) : null}
        >
          {"New"}
        </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div
          className={`sub-header-item${!showNew ? '-selected' : ''}`}
          onClick={() => showNew ? setShowNew(!showNew) : null}
        >
          {"Cleared"}
        </div>
      </div>
    </div>
    <div className="notification-body">
      {notifications.filter(({ unread }) => unread === showNew).length
        ? notifications
          .filter(({ unread }) => unread === showNew)
          .map(item =>
            <NotificationItem
              key={item.id}
              item={item}
              markAsRead={markAsRead}
            />
          )
        : showNew
          ? <div className="no-record-message">{"\"You're all caught up\""}</div>
          : null
      }
    </div>
  </Container>
}

export default NotificationView