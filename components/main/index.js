import Header from '../header';
import Footer from '../footer';
import Content from '../commonButtons';

const Main = ({children}) => {
    return (
        <>
            <Header />
            <Content />
            {children}
            <Footer />
        </>
    )
}

export default Main;

