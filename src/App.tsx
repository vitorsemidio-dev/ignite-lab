import { gql, useQuery } from '@apollo/client';

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
        bio
      }
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
  teacher?: Teacher;
}

interface Teacher {
  name: string;
  bio: string;
  lessons: Lesson[];
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  console.log(data);
  return (
    <div>
      <h1 className="tailwind-with-class">Hello World Ignite Lab</h1>
      <ul>
        {data?.lessons.map((lesson) => {
          return <li key={lesson.id}>{lesson.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
