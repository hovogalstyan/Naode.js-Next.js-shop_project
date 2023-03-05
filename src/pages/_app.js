import '@/styles/globals.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "@/pages/Layout";
import {Provider} from "react-redux";
import {store} from "@/store/store";

export default function App({Component, pageProps}) {
    return <Provider store={store}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </Provider>
}
