import React, { useRef } from 'react';
import styles from './cardslist.css';
import { Card } from './Card';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../../store/reducer';

export function CardsList() {
  const [posts, setPosts] = React.useState<any[]>([]);
  const token = useSelector<RootState, string>(state => state.token);
  const [loading, setLoading] = React.useState(false);
  const [errorLoading, setErrorLoading] = React.useState('');
  const bottomOfList = useRef<HTMLDivElement>(null);
  const [after, setAfter] = React.useState('');

  // React.useEffect(() => {
  //   async function load() {
  //     setLoading(true);
  //     setErrorLoading('');

  //     try {
  //       const { data: { data: { after, children } } } = await axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
  //         headers: { 'Authorization': `Bearer ${token}` },
  //         params: {
  //           limit: 10
  //         }
  //       })

  //       setAfter(after)
  //       setPosts(children)
  //     } catch (error) {
  //       setErrorLoading(String(error));
  //     }

  //     setLoading(false);
  //   }

  //   if (token !== '' && token !== undefined && token !== 'undefined') {
  //     load();
  //   }
  // }, [token]);

  React.useEffect(() => {
    async function load() {
      setLoading(true);
      setErrorLoading('');

      try {
        const { data: { data: { after, children } } } = await axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
          headers: { 'Authorization': `Bearer ${token}` },
          params: {
            limit: 10
          }
        })

        setAfter(after)
        setPosts(prevChildren => children)
      } catch (error) {
        setErrorLoading(String(error));
      }

      setLoading(false);
    }

    const observer = new IntersectionObserver(() => {
      load()
    }, {
      rootMargin: '10px'
    });

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current)
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current)
      }
    }
  }, [bottomOfList.current])

  return (
    <ul className={styles.cardsList}>
      {posts.length === 0 && !loading && !errorLoading && (
        <div>
          No posts yet...
        </div>
      )}

      {posts.map((post) => (
        <Card key={post.data.id} post={post} />
      ))}

      <div ref={bottomOfList} />

      {loading && 'loading...'}

      {errorLoading && (
        <div role='alert'>
          Failed to load posts: {errorLoading}
        </div>
      )}
    </ul>
  );
}
