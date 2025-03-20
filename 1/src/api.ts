import useSWR from 'swr';

const API_BASE = 'http://20.244.56.144/test';
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNDc2OTQ5LCJpYXQiOjE3NDI0NzY2NDksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjExMWE5NDY2LTY3OTItNGE2Ni04MzAwLTg1OTBhYTI1YThjMyIsInN1YiI6ImFtMzAyNkBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiQWx2aW4iLCJjbGllbnRJRCI6IjExMWE5NDY2LTY3OTItNGE2Ni04MzAwLTg1OTBhYTI1YThjMyIsImNsaWVudFNlY3JldCI6Inhwc3V6cFllWnBkbFlHb3AiLCJvd25lck5hbWUiOiJBbHZpbiBBbGJlcnQgTWljaGFlbCIsIm93bmVyRW1haWwiOiJhbTMwMjZAc3JtaXN0LmVkdS5pbiIsInJvbGxObyI6IlJBMjIxMTAyNjAyMDA0OCJ9.VYUO1B_hoMA3PUQeiQBYb-bK1uPyy79UTYzKiehlGDk';

const fetcher = (url: string) => 
  fetch(url, {
    headers: {
      'Authorization': `Bearer ${AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
  }).then(res => {
    if (!res.ok) {
      throw new Error('API request failed');
    }
    return res.json();
  });

export function useUsers() {
  return useSWR<Record<string, string>>(`${API_BASE}/users`, fetcher);
}

export function usePosts(userId: string) {
  return useSWR<PostsResponse>(
    userId ? `${API_BASE}/users/${userId}/posts` : null,
    fetcher
  );
}

export function useComments(postId: number) {
  return useSWR<CommentsResponse>(
    postId ? `${API_BASE}/posts/${postId}/comments` : null,
    fetcher
  );
}