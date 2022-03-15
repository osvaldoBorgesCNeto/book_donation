# Book_Donation

## Install

**Clone the repository**
```bash
  git clone git@github.com:osvaldoBorgesCNeto/book_donation.git
  cd book_donation
```

**Install the dependencies**
```bash
  npm install
```

**Set the .env file by following the example**
```bash
  USER_EMAIL=
  PASSWORD_EMAIL=
  PORT=
  JWT_SECRET=
  DATABASE_URL="postgresql://book:donation@localhost:5432/book_donation?schema=public"
```

**For development environment**
```bash
  sudo docker-compose up -d
  npm run migrate
  npm run seed
  npm start
```