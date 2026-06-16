/*
  Warnings:

  - A unique constraint covering the columns `[payNumber]` on the table `Apartment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `payNumber` to the `Apartment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Apartment" ADD COLUMN     "payNumber" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Apartment_payNumber_key" ON "Apartment"("payNumber");

-- CreateIndex
CREATE INDEX "Apartment_payNumber_idx" ON "Apartment"("payNumber");
