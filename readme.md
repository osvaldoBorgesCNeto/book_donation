# Book_Donation

## Pre-Requesites

**Docker**
```bash
	sudo apt-get install docker-ce docker-ce-cli containerd.io
```

**Docker Compose**
```bash
	sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
	sudo chmod +x /usr/local/bin/docker-compose
```

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
