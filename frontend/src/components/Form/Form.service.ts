import { fetchUsersProps } from "./Form.types";

export async function fetchUsers({ data, setUsers, setError, reset, previousController }: fetchUsersProps) {
  try {
    if (previousController.current) {
      previousController.current.abort();
    }
    const controller = new AbortController();
    previousController.current = controller;
    const { signal } = controller;
    const searchParams = new URLSearchParams();
    searchParams.append('email', data.email);
    searchParams.append('number', data.number);

    const response = await fetch(`http://localhost:3000/users?${searchParams.toString()}`, {
      method: 'GET',
      signal,
    });

    if (response.ok) {
      const responseData = await response.json();
      setUsers(responseData);
      reset();
    } else {
      console.error('Request failed');
      setError('Request failed');
      setUsers(null);
    }
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        console.error('Request was aborted');
      } else {
        console.error('A network error occurred', error);
        throw error;
      }
    } else {
      console.error('An error occurred', error);
    }
  }
}

