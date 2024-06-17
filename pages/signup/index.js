import Head from 'next/head';
import SignupForm from '../../page-containers/admin/signup';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Signup Page</title>
        <meta name="description" content="Signup page for your application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SignupForm />
      </main>
    </div>
  );
}
