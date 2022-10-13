import Head from "next/head";
import { useEffect } from 'react'

const Wrapper = (props) => {
    const [og_url, setog_url] = useState("")

    useEffect(() => {
        setog_url(window.location.href)
    }, [])

    return (
        <>
            <Head>
                ... other meta tags ...

                <meta property="og:url" content={og_url ? og_url : "manutdnow.vercel.app"} />

            </Head>
            {props.children}
        </>
    )

import Container from 'components/Container';

import styles from './Header.module.scss';

const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      <Container>{children}</Container>
    </header>
  );
};

export default Header;
