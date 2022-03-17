module.exports = (req, res, next) => {
  const { user } = req;
  
  if (!user) res.status(401).json({message: 'Necessario fazer autentificação'})

  if(!user.admin) res.status(403).json({ error: { message:'Restricted acess' }});

  return next();
};