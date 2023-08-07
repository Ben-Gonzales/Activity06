const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const uri = 'mongodb+srv://bengonzales:password123456789@cluster0.nodeklw.mongodb.net/?retryWrites=true&w=majority';

//Routes
const avatarRoutes = require('./routes/avatar');
const deviceRoutes = require('./routes/device');
const employeeRoutes = require('./routes/employee');
const scheduleRoutes = require('./routes/schedule');
const storeRoutes = require('./routes/store');
const vehicleRoutes = require('./routes/vehicle');


const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

mongoose.connection.once('open', () => {
    console.log('Now connected to MongoDB Atlas')
})

mongoose.connect(uri, {
    dbName: 'Cluster0'
})

app.use(deviceRoutes);
app.use(employeeRoutes);
app.use(scheduleRoutes);
app.use(storeRoutes);
app.use(vehicleRoutes);
app.use(avatarRoutes);

const PORT = 4000;
app.listen(PORT, () => console.log(`API running at http://localhost:${PORT}`));