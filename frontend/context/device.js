// ORIGINAL AUTHOR github@marvin1003
// I just optimized this a bit.

export const DeviceContext = React.createContext();

export class DeviceProvider extends React.Component {
    constructor( props ) {
        super(props);

        this.state = {
            width: null,
            hideDesktop: null,
            isSmall: null,
            isMobile: null
        }

        this.target = this.target.bind(this);
    }

    componentDidMount() {
        this.target();
        window.addEventListener('resize', this.target);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.target);
    }

    target() {
        let width = window.innerWidth;
        let isSmall = window.innerWidth <= 1024;
        let hideDesktop = window.innerWidth <= 320;

        this.setState({
            width,
            isSmall,
            hideDesktop,
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        });
    }

    render() {
        return (
            <DeviceContext.Provider value={this.state}>
                {this.props.children}
            </DeviceContext.Provider>
        );
    }
}
