const mongoose = require('mongoose');

// 连接到 MongoDB 数据库
mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // 定义用户模型
    const UserSchema = new mongoose.Schema({
      username: String,
      password: String,
      email: String
    });

    const User = mongoose.model('User', UserSchema);

    // 创建新用户
    const newUser = new User({
      username: 'exampleuser',
      password: 'examplepassword',
      email: 'test@gmail.com'
    });

    // 保存用户到数据库
    newUser.save()
      .then(() => {
        console.log('User created:', newUser);
        mongoose.connection.close();
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        mongoose.connection.close();
      });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
