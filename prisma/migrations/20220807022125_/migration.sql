/*
  Warnings:

  - The primary key for the `FeatureRequest` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "FeatureRequest" DROP CONSTRAINT "FeatureRequest_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "FeatureRequest_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "FeatureRequest_id_seq";
