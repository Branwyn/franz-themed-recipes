'use strict';

const path = require('path');

module.exports = Franz => {
  Franz.injectCSS(path.join(__dirname, 'transparent.css'));
  const getMessages = function getMessages() {
    let count = document.querySelectorAll('._5fx8:not(._569x),._1ht3:not(._569x)').length;
    const messageRequestsElement = document.querySelector('._5nxf');
    if (messageRequestsElement) {
      count += parseInt(messageRequestsElement.innerHTML, 10);
    }

    Franz.setBadge(count);
  };

  Franz.loop(getMessages);

  /* Enable desktop notifications in messenger settings */
  localStorage["_cs_desktopNotifsEnabled"] = JSON.stringify({"__t": new Date().getTime(), "__v": true});

  if (typeof Franz.onNotify === 'function') {
    Franz.onNotify(notification => {
      if (typeof notification.title !== 'string') {
        notification.title = ((notification.title.props || {}).content || [])[0] || 'Messenger';
      }

      if (typeof notification.options.body !== 'string') {
        notification.options.body = (((notification.options.body || {}).props || {}).content || [])[0] || '';
      }

      return notification;
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3Nlbmdlci93ZWJ2aWV3LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJGcmFueiIsImdldE1lc3NhZ2VzIiwiY291bnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJtZXNzYWdlUmVxdWVzdHNFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcnNlSW50IiwiaW5uZXJIVE1MIiwic2V0QmFkZ2UiLCJsb29wIiwibG9jYWxTdG9yYWdlIiwiSlNPTiIsInN0cmluZ2lmeSIsIkRhdGUiLCJnZXRUaW1lIiwib25Ob3RpZnkiLCJub3RpZmljYXRpb24iLCJ0aXRsZSIsInByb3BzIiwiY29udGVudCIsIm9wdGlvbnMiLCJib2R5Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxPQUFQLEdBQWtCQyxLQUFELElBQVc7QUFDMUIsUUFBTUMsY0FBYyxTQUFTQSxXQUFULEdBQXVCO0FBQ3pDLFFBQUlDLFFBQVFDLFNBQVNDLGdCQUFULENBQTBCLHVDQUExQixFQUFtRUMsTUFBL0U7QUFDQSxVQUFNQyx5QkFBeUJILFNBQVNJLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBL0I7QUFDQSxRQUFJRCxzQkFBSixFQUE0QjtBQUMxQkosZUFBU00sU0FBU0YsdUJBQXVCRyxTQUFoQyxFQUEyQyxFQUEzQyxDQUFUO0FBQ0Q7O0FBRURULFVBQU1VLFFBQU4sQ0FBZVIsS0FBZjtBQUNELEdBUkQ7O0FBVUFGLFFBQU1XLElBQU4sQ0FBV1YsV0FBWDs7QUFFQTtBQUNBVyxlQUFhLDBCQUFiLElBQTJDQyxLQUFLQyxTQUFMLENBQWUsRUFBQyxPQUFNLElBQUlDLElBQUosR0FBV0MsT0FBWCxFQUFQLEVBQTZCLE9BQU0sSUFBbkMsRUFBZixDQUEzQzs7QUFFQSxNQUFJLE9BQU9oQixNQUFNaUIsUUFBYixLQUEwQixVQUE5QixFQUEwQztBQUN4Q2pCLFVBQU1pQixRQUFOLENBQWdCQyxZQUFELElBQWtCO0FBQy9CLFVBQUksT0FBT0EsYUFBYUMsS0FBcEIsS0FBOEIsUUFBbEMsRUFBNEM7QUFDMUNELHFCQUFhQyxLQUFiLEdBQXFCLENBQUMsQ0FBQ0QsYUFBYUMsS0FBYixDQUFtQkMsS0FBbkIsSUFBNEIsRUFBN0IsRUFBaUNDLE9BQWpDLElBQTRDLEVBQTdDLEVBQWlELENBQWpELEtBQXVELFdBQTVFO0FBQ0Q7O0FBRUQsVUFBSSxPQUFPSCxhQUFhSSxPQUFiLENBQXFCQyxJQUE1QixLQUFxQyxRQUF6QyxFQUFtRDtBQUNqREwscUJBQWFJLE9BQWIsQ0FBcUJDLElBQXJCLEdBQTRCLENBQUMsQ0FBQyxDQUFDTCxhQUFhSSxPQUFiLENBQXFCQyxJQUFyQixJQUE2QixFQUE5QixFQUFrQ0gsS0FBbEMsSUFBMkMsRUFBNUMsRUFBZ0RDLE9BQWhELElBQTJELEVBQTVELEVBQWdFLENBQWhFLEtBQXNFLEVBQWxHO0FBQ0Q7O0FBRUQsYUFBT0gsWUFBUDtBQUNELEtBVkQ7QUFXRDtBQUNGLENBN0JEIiwiZmlsZSI6Im1lc3Nlbmdlci93ZWJ2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAoRnJhbnopID0+IHtcbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSBmdW5jdGlvbiBnZXRNZXNzYWdlcygpIHtcbiAgICBsZXQgY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuXzVmeDg6bm90KC5fNTY5eCksLl8xaHQzOm5vdCguXzU2OXgpJykubGVuZ3RoO1xuICAgIGNvbnN0IG1lc3NhZ2VSZXF1ZXN0c0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuXzVueGYnKTtcbiAgICBpZiAobWVzc2FnZVJlcXVlc3RzRWxlbWVudCkge1xuICAgICAgY291bnQgKz0gcGFyc2VJbnQobWVzc2FnZVJlcXVlc3RzRWxlbWVudC5pbm5lckhUTUwsIDEwKTtcbiAgICB9XG5cbiAgICBGcmFuei5zZXRCYWRnZShjb3VudCk7XG4gIH07XG5cbiAgRnJhbnoubG9vcChnZXRNZXNzYWdlcyk7XG4gIFxuICAvKiBFbmFibGUgZGVza3RvcCBub3RpZmljYXRpb25zIGluIG1lc3NlbmdlciBzZXR0aW5ncyAqL1xuICBsb2NhbFN0b3JhZ2VbXCJfY3NfZGVza3RvcE5vdGlmc0VuYWJsZWRcIl0gPSBKU09OLnN0cmluZ2lmeSh7XCJfX3RcIjpuZXcgRGF0ZSgpLmdldFRpbWUoKSwgXCJfX3ZcIjp0cnVlfSlcblxuICBpZiAodHlwZW9mIEZyYW56Lm9uTm90aWZ5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgRnJhbnoub25Ob3RpZnkoKG5vdGlmaWNhdGlvbikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBub3RpZmljYXRpb24udGl0bGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5vdGlmaWNhdGlvbi50aXRsZSA9ICgobm90aWZpY2F0aW9uLnRpdGxlLnByb3BzIHx8IHt9KS5jb250ZW50IHx8IFtdKVswXSB8fCAnTWVzc2VuZ2VyJztcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBub3RpZmljYXRpb24ub3B0aW9ucy5ib2R5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICBub3RpZmljYXRpb24ub3B0aW9ucy5ib2R5ID0gKCgobm90aWZpY2F0aW9uLm9wdGlvbnMuYm9keSB8fCB7fSkucHJvcHMgfHwge30pLmNvbnRlbnQgfHwgW10pWzBdIHx8ICcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm90aWZpY2F0aW9uO1xuICAgIH0pO1xuICB9XG59O1xuIl19