/*
  Warnings:

  - Made the column `referralCode` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `referralCode` VARCHAR(191) NOT NULL;
