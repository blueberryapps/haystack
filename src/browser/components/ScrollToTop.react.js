import { PropTypes as RPT, PureComponent } from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends PureComponent {
  static propTypes = {
    children: RPT.node,
    location: RPT.object
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}


export default withRouter(ScrollToTop);
