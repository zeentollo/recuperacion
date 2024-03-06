-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: bdiurjbsfvjumtblrk0d-mysql.services.clever-cloud.com:3306
-- Tiempo de generación: 06-03-2024 a las 21:15:42
-- Versión del servidor: 8.0.22-13
-- Versión de PHP: 8.2.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdiurjbsfvjumtblrk0d`
--
CREATE DATABASE IF NOT EXISTS `bdiurjbsfvjumtblrk0d` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `bdiurjbsfvjumtblrk0d`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `objetos_usuarios`
--

CREATE TABLE `objetos_usuarios` (
  `id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `foto` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `nombre` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `descripcion` text CHARACTER SET utf8 COLLATE utf8_general_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `pass`) VALUES
(0, 'admin', 'admin@admin.com', '$2a$08$pIRFHQOxVRIUewX.OdRBV.obhaSSuT0AytAGI1oBao/Yl6p9w2fza'),
(1, 'daniel', 'daniel@daniel.com', '$2a$08$66EARNtJYz57GVOZuNkVwephATef9K03UAeXXWtApnlNB1pY6gV9m'),
(2, 'luis', 'luis@luis.com', '$2a$08$l5vXVpFq0XAEKu0A9xsNR.8FeF..D4xxqqPNbhgxVq/aF4kq1jhtq'),
(3, 'prueba', 'prueba@prueba.com', '$2a$08$FZgN7.XFf6gIAYlcdYlv4.x4nlJZXzxuJ1h0crzo2LM4ARf5pBH3.');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `objetos_usuarios`
--
ALTER TABLE `objetos_usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `objetos_usuarios`
--
ALTER TABLE `objetos_usuarios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `objetos_usuarios`
--
ALTER TABLE `objetos_usuarios`
  ADD CONSTRAINT `objetos_usuarios_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
