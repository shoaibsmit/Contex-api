// "use client";

// import Image from "next/image";
// import styles from "./page.module.css";
// import { ThemeContext } from "@/context/toggletheme";
// import Link from "next/link";

// export default function Home() {
//   const { isDarkTheme, toggleTheme } = ThemeContext();

//   // Dummy data for students
//   const students = [
//     { name: "John Doe", rollnum: 123 },
//     { name: "Jane Smith", rollnum: 456 }
//   ];

//   return (
//     <main
//       className={styles.main}
//       style={{
//         backgroundColor: isDarkTheme ? "black" : "white",
//         color: isDarkTheme ? "white" : "black",
//       }}
//     >
//       <Link href={"/login"}>Login</Link>
//       <button onClick={toggleTheme}>Change Theme</button>

//       <h1>Student Management</h1>
//       <Link href="/createstudent">
//         <button>Add New Student</button>
//       </Link>

//       <ul className={styles.studentList}>
//         {students.map((student) => (
//           <li key={student.rollnum}>
//             <span>{student.name} - Roll No: {student.rollnum}</span>
//             <Link href={`/${student.rollnum}`}>
//               <button>See Details</button>
//             </Link>
//             <Link href={`/${student.rollnum}/edit`}>
//               <button>Edit</button>
//             </Link>
//             <button
//               onClick={() => {
//                 // Implement delete functionality
//                 alert(`Delete student with roll number ${student.rollnum}`);
//               }}
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>

//       <div className={styles.description}>
//         <p>
//           Get started by editing&nbsp;
//           <code className={styles.code}>src/app/page.tsx</code>
//         </p>
//         <div>
//           <a
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className={styles.vercelLogo}
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className={styles.center}>
//         <Image
//           className={styles.logo}
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className={styles.grid}>
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Docs <span>-&gt;</span>
//           </h2>
//           <p>Find in-depth information about Next.js features and API.</p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Learn <span>-&gt;</span>
//           </h2>
//           <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Templates <span>-&gt;</span>
//           </h2>
//           <p>Explore starter templates for Next.js.</p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className={styles.card}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2>
//             Deploy <span>-&gt;</span>
//           </h2>
//           <p>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }








"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { ThemeContext } from "@/context/toggletheme";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const { isDarkTheme, toggleTheme } = ThemeContext();

  // Dummy data for students
  const [students, setStudents] = useState([
    { name: "SHOAIB AHMED", rollnum: 265 },
    { name: "Taha khan", rollnum: 456 }
  ]);

  const handleDelete = (rollnum: number) => {
    if (confirm(`Are you sure you want to delete student with roll number ${rollnum}?`)) {
      setStudents(students.filter(student => student.rollnum !== rollnum));
    }
  };

  return (
    <main
      className={styles.main}
      style={{
        backgroundColor: isDarkTheme ? "black" : "white",
        color: isDarkTheme ? "white" : "black",
      }}
    >
      <Link href={"/login"}>Login</Link>
      <button onClick={toggleTheme}>Change Theme</button>

      <h1>Student Management</h1>
      <Link href="/createstudent">
        <button>Add New Student</button>
      </Link>

      <ul className={styles.studentList}>
        {students.map((student) => (
          <li key={student.rollnum}>
            <span>{student.name} - Roll No: {student.rollnum}</span>
            <Link href={`/students/${student.rollnum}`}>
              <button>See Details</button>
            </Link>
            <Link href={`/students/${student.rollnum}/edit`}>
              <button>Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(student.rollnum)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
