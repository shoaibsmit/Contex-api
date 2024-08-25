// // pages/createstudent.tsx

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import styles from "../styles/CreateStudent.module.css"; // Optional: for custom styles

// export default function CreateStudent() {
//   const [name, setName] = useState("");
//   const [rollNumber, setRollNumber] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e: { preventDefault: () => void; }) => {
//     e.preventDefault();

//     // Basic validation
//     if (!name || !rollNumber) {
//       alert("Please fill out both fields.");
//       return;
//     }

//     // Submit data to the server or API
//     // Example: Posting data to an API endpoint
//     try {
//       const response = await fetch("/api/students", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ name, rollNumber }),
//       });

//       if (response.ok) {
//         alert("Student added successfully!");
//         router.push("/"); // Redirect to the home page or any other page
//       } else {
//         alert("Failed to add student.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred while adding the student.");
//     }
//   };

//   return (
//     <main className={styles.main}>
//       <h1>Create New Student</h1>
//       <form onSubmit={handleSubmit} className={styles.form}>
//         <div className={styles.formGroup}>
//           <label htmlFor="name">Student Name:</label>
//           <input
//             id="name"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="rollnum">Roll Number:</label>
//           <input
//             id="rollnum"
//             type="number"
//             value={rollNumber}
//             onChange={(e) => setRollNumber(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Save</button>
//       </form>
//     </main>
//   );
// }
