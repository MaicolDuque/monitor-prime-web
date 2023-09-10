import { useGetTodosQuery } from '@/store/api/api.slice';

const Index = () => {
  const { data } = useGetTodosQuery(undefined);
  console.log({ data });
  return (
    <>
      <div>
        <h1>starter page</h1>
      </div>
    </>
  );
};

export default Index;
