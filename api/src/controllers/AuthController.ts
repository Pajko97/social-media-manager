const Register = async (req: any, res: any) => {
    
  const { username, password } = req.body;

  try {
    // Check if username is already taken
    const existingUser = await prisma.user.findUnique({ where: { username } });

    if (existingUser) {
      return res.status(409).json({ message: 'Username already taken.' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    res.json({ message: 'Registration successful.', user });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed.', error });
  }
}
const AuthGoogle = () => {
    passport.authenticate('google', { scope: ['profile', 'email'] })
}


module.exports = {
    Register
}