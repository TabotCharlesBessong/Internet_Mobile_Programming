-- CreateEnum
CREATE TYPE "RideStatus" AS ENUM ('CANCELLED', 'IN_TRANSIT', 'COMPLETED', 'NOT_STARTED');

-- CreateEnum
CREATE TYPE "SubscriptionMode" AS ENUM ('MONTHLY', 'QUARTERLY', 'BI_YEARLY', 'YEARLY');

-- CreateEnum
CREATE TYPE "SubscriptionAmount" AS ENUM ('1000', '2500', '4000', '10000');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "isDriver" BOOLEAN NOT NULL DEFAULT false,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Driver" (
    "id" TEXT NOT NULL,
    "telephone" INTEGER NOT NULL,
    "tekisiName" VARCHAR(20) NOT NULL,
    "licenceNum" VARCHAR(6) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ride" (
    "id" TEXT NOT NULL,
    "origin" VARCHAR(50) NOT NULL,
    "destination" VARCHAR(50) NOT NULL,
    "status" "RideStatus" NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,
    "passengerId" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Ride_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "type" "SubscriptionMode" NOT NULL,
    "amount" "SubscriptionAmount" NOT NULL,
    "subscriptionDate" TIMESTAMP(3) NOT NULL,
    "expirationDate" TIMESTAMP(3) NOT NULL,
    "driverId" TEXT NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RidePayment" (
    "id" TEXT NOT NULL,
    "passengerId" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,

    CONSTRAINT "RidePayment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_telephone_key" ON "Driver"("telephone");

-- CreateIndex
CREATE UNIQUE INDEX "Driver_userId_key" ON "Driver"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Ride_passengerId_key" ON "Ride"("passengerId");

-- CreateIndex
CREATE UNIQUE INDEX "Ride_driverId_key" ON "Ride"("driverId");

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_driverId_key" ON "Subscription"("driverId");

-- CreateIndex
CREATE UNIQUE INDEX "RidePayment_passengerId_key" ON "RidePayment"("passengerId");

-- CreateIndex
CREATE UNIQUE INDEX "RidePayment_driverId_key" ON "RidePayment"("driverId");

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ride" ADD CONSTRAINT "Ride_passengerId_fkey" FOREIGN KEY ("passengerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ride" ADD CONSTRAINT "Ride_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Subscription" ADD CONSTRAINT "Subscription_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RidePayment" ADD CONSTRAINT "RidePayment_passengerId_fkey" FOREIGN KEY ("passengerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RidePayment" ADD CONSTRAINT "RidePayment_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
