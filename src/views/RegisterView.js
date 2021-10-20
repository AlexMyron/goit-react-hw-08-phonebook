export const RegisterView = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget.elements.name.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your name" autoComplete="off" />
      <input type="email" name="email" placeholder="Your email" autoComplete="off" />
      <input type="password" name="password" placeholder="Create a password" autoComplete="off" />
      <button type="submit">Register</button>
    </form>
  );
};
