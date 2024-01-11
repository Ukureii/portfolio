-- CreateTable
CREATE TABLE `CONCERNER` (
    `id_point` INTEGER NOT NULL,
    `id_lien` INTEGER NOT NULL,

    INDEX `id_lien`(`id_lien`),
    PRIMARY KEY (`id_point`, `id_lien`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cartes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(64) NULL,
    `dateCrea` DATE NULL,
    `partagee` BOOLEAN NULL,
    `id_jeune` INTEGER NOT NULL,

    INDEX `id_jeune`(`id_jeune`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `graines` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(128) NULL,
    `desc` VARCHAR(512) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `items` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(128) NULL,
    `desc` VARCHAR(512) NULL,
    `verrouille` BOOLEAN NULL,
    `id_jeune` INTEGER NOT NULL,
    `id_graine` INTEGER NOT NULL,
    `id_point` INTEGER NOT NULL,

    UNIQUE INDEX `id_point`(`id_point`),
    INDEX `id_graine`(`id_graine`),
    INDEX `id_jeune`(`id_jeune`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `liens` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `couleur` VARCHAR(6) NULL,
    `epaisseur` INTEGER NULL,
    `commentaire` VARCHAR(256) NULL,
    `id_carte` INTEGER NOT NULL,

    INDEX `id_carte`(`id_carte`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `points` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `coordX` DECIMAL(15, 2) NULL,
    `coordY` DECIMAL(15, 2) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `utilisateurs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(64) NULL,
    `prenom` VARCHAR(64) NULL,
    `mail` VARCHAR(50) NULL,
    `motdepasse` VARCHAR(128) NULL,
    `avatar` VARCHAR(1024) NULL,
    `id_point` INTEGER NOT NULL,

    UNIQUE INDEX `id_point`(`id_point`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CONCERNER` ADD CONSTRAINT `concerner_ibfk_1` FOREIGN KEY (`id_point`) REFERENCES `points`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `CONCERNER` ADD CONSTRAINT `concerner_ibfk_2` FOREIGN KEY (`id_lien`) REFERENCES `liens`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `cartes` ADD CONSTRAINT `cartes_ibfk_1` FOREIGN KEY (`id_jeune`) REFERENCES `utilisateurs`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `items` ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`id_jeune`) REFERENCES `utilisateurs`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `items` ADD CONSTRAINT `items_ibfk_2` FOREIGN KEY (`id_graine`) REFERENCES `graines`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `items` ADD CONSTRAINT `items_ibfk_3` FOREIGN KEY (`id_point`) REFERENCES `points`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `liens` ADD CONSTRAINT `liens_ibfk_1` FOREIGN KEY (`id_carte`) REFERENCES `cartes`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `utilisateurs` ADD CONSTRAINT `utilisateurs_ibfk_1` FOREIGN KEY (`id_point`) REFERENCES `points`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

