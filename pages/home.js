import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../reducers/user';
import Page from '../components/page';
import Index from '../pages/index';

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [loadPage, setLoadPage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://hackatweet-backend.vercel.app/?username=${user.username || ''}&token=${user.token || ''}`
      );
      console.log(res);
      if (res.result) {
        setLoadPage(true);
      } else {
        window.location.href = '/';
      }
    };
    fetchData();
  }, []);

  const PageComponent = () => {
    <Page title={'- Home'}>
      <div>Hello</div>
    </Page>;
  };

  return <>{loadPage ? <PageComponent /> : <Index />}</>;
}
