export const LoginView = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget.elements);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};
