-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 21, 2021 at 05:35 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cmc`
--

-- --------------------------------------------------------

--
-- Table structure for table `announcement`
--

CREATE TABLE `announcement` (
  `aid` int(210) NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` varchar(255) NOT NULL,
  `uid` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `announcement`
--

INSERT INTO `announcement` (`aid`, `title`, `description`, `uid`) VALUES
(1, 'era', 'aer', 2);

-- --------------------------------------------------------

--
-- Table structure for table `application`
--

CREATE TABLE `application` (
  `app_id` int(210) NOT NULL,
  `phoneNumber` varchar(20) NOT NULL,
  `address` varchar(100) NOT NULL,
  `howKnow` varchar(50) NOT NULL,
  `uid` int(150) NOT NULL,
  `cid` int(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `application`
--

INSERT INTO `application` (`app_id`, `phoneNumber`, `address`, `howKnow`, `uid`, `cid`) VALUES
(1, '3213213', 'sadsaqeqwdwqdsd', 'internet', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `assignment`
--

CREATE TABLE `assignment` (
  `assID` int(210) NOT NULL,
  `date` datetime NOT NULL,
  `file` varchar(150) NOT NULL,
  `title` varchar(200) NOT NULL,
  `deadline` datetime NOT NULL,
  `description` varchar(255) NOT NULL,
  `uid` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `assignment`
--

INSERT INTO `assignment` (`assID`, `date`, `file`, `title`, `deadline`, `description`, `uid`) VALUES
(11, '2021-08-10 17:06:20', 'upload/assignment/551bbbc5c675f83ccf79b0acf1789f06.mkv', 'submission test udpate', '2021-09-14 00:00:00', 'test test update', 2);

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `cid` int(210) NOT NULL,
  `uid` int(200) NOT NULL,
  `subject` varchar(100) NOT NULL,
  `grade` varchar(10) NOT NULL,
  `medium` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`cid`, `uid`, `subject`, `grade`, `medium`) VALUES
(1, 2, 'Test Class', '12', 'English');

-- --------------------------------------------------------

--
-- Table structure for table `enroll`
--

CREATE TABLE `enroll` (
  `uid` int(200) NOT NULL,
  `cid` int(210) NOT NULL,
  `time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `enroll`
--

INSERT INTO `enroll` (`uid`, `cid`, `time`) VALUES
(1, 1, '2021-09-08 03:33:55');

-- --------------------------------------------------------

--
-- Table structure for table `forum`
--

CREATE TABLE `forum` (
  `fid` int(210) NOT NULL,
  `uid` int(200) NOT NULL,
  `title` varchar(200) NOT NULL,
  `description` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `forum_reply`
--

CREATE TABLE `forum_reply` (
  `rid` int(220) NOT NULL,
  `uid` int(200) NOT NULL,
  `fid` int(210) NOT NULL,
  `reply` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `uid` int(200) NOT NULL,
  `school` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`uid`, `school`) VALUES
(1, 'sdasda'),
(3, 'sac');

-- --------------------------------------------------------

--
-- Table structure for table `submission`
--

CREATE TABLE `submission` (
  `sid` int(220) NOT NULL,
  `assID` int(210) NOT NULL,
  `file` varchar(150) NOT NULL,
  `date` datetime NOT NULL,
  `description` varchar(255) NOT NULL,
  `marks` float NOT NULL,
  `uid` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `submission`
--

INSERT INTO `submission` (`sid`, `assID`, `file`, `date`, `description`, `marks`, `uid`) VALUES
(1, 11, 'upload/submission/1fc3726d731268af78b13f4ce0305745.mkv', '2021-09-12 23:44:07', 'asd', -1, 1),
(2, 11, 'upload/submission/1fc3726d731268ab13f4ce0305745.mkv', '2021-09-12 23:44:07', 'submission 2', 70, 3);

-- --------------------------------------------------------

--
-- Table structure for table `teacher`
--

CREATE TABLE `teacher` (
  `uid` int(200) NOT NULL,
  `phoneNumber` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher`
--

INSERT INTO `teacher` (`uid`, `phoneNumber`) VALUES
(2, '123213');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `uid` int(200) NOT NULL,
  `birthday` date NOT NULL,
  `fname` varchar(200) NOT NULL,
  `lname` varchar(200) NOT NULL,
  `date` datetime NOT NULL,
  `email` varchar(200) NOT NULL,
  `uType` char(1) NOT NULL,
  `psw` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`uid`, `birthday`, `fname`, `lname`, `date`, `email`, `uType`, `psw`) VALUES
(1, '2021-09-07', 'Ragnar', 'Peter', '2021-09-07 22:58:15', 'sera@gmail.com', 's', 'b2a49e1cb17f2009e9084f456b32fd26'),
(2, '2021-09-07', 'Peter', 'Jack', '2021-09-07 22:58:15', 'jac@gmail.com', 't', 'b2a49e1cb17f2009e9084f456b32fd26'),
(3, '2021-09-07', 'Thanos', 'Jack', '2021-09-13 22:58:15', 'giko@gmail.com', 's', 'b2a49e1cb17f2009e9084f456b32fd26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `announcement`
--
ALTER TABLE `announcement`
  ADD PRIMARY KEY (`aid`),
  ADD KEY `uid` (`uid`);

--
-- Indexes for table `application`
--
ALTER TABLE `application`
  ADD PRIMARY KEY (`app_id`),
  ADD KEY `uid` (`uid`),
  ADD KEY `cid` (`cid`);

--
-- Indexes for table `assignment`
--
ALTER TABLE `assignment`
  ADD PRIMARY KEY (`assID`),
  ADD KEY `uid` (`uid`);

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`cid`),
  ADD KEY `uid` (`uid`);

--
-- Indexes for table `enroll`
--
ALTER TABLE `enroll`
  ADD PRIMARY KEY (`uid`,`cid`);

--
-- Indexes for table `forum`
--
ALTER TABLE `forum`
  ADD PRIMARY KEY (`fid`),
  ADD KEY `uid` (`uid`);

--
-- Indexes for table `forum_reply`
--
ALTER TABLE `forum_reply`
  ADD PRIMARY KEY (`rid`),
  ADD KEY `uid` (`uid`),
  ADD KEY `fid` (`fid`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `submission`
--
ALTER TABLE `submission`
  ADD PRIMARY KEY (`sid`),
  ADD KEY `uid` (`uid`),
  ADD KEY `assID` (`assID`);

--
-- Indexes for table `teacher`
--
ALTER TABLE `teacher`
  ADD PRIMARY KEY (`uid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `announcement`
--
ALTER TABLE `announcement`
  MODIFY `aid` int(210) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `application`
--
ALTER TABLE `application`
  MODIFY `app_id` int(210) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `assignment`
--
ALTER TABLE `assignment`
  MODIFY `assID` int(210) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `cid` int(210) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `forum`
--
ALTER TABLE `forum`
  MODIFY `fid` int(210) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `forum_reply`
--
ALTER TABLE `forum_reply`
  MODIFY `rid` int(220) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `uid` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `submission`
--
ALTER TABLE `submission`
  MODIFY `sid` int(220) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `teacher`
--
ALTER TABLE `teacher`
  MODIFY `uid` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `uid` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `announcement`
--
ALTER TABLE `announcement`
  ADD CONSTRAINT `announcement_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`);

--
-- Constraints for table `application`
--
ALTER TABLE `application`
  ADD CONSTRAINT `application_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `student` (`uid`),
  ADD CONSTRAINT `application_ibfk_2` FOREIGN KEY (`cid`) REFERENCES `class` (`cid`);

--
-- Constraints for table `assignment`
--
ALTER TABLE `assignment`
  ADD CONSTRAINT `assignment_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `teacher` (`uid`);

--
-- Constraints for table `class`
--
ALTER TABLE `class`
  ADD CONSTRAINT `class_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `teacher` (`uid`);

--
-- Constraints for table `enroll`
--
ALTER TABLE `enroll`
  ADD CONSTRAINT `enroll_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `student` (`uid`),
  ADD CONSTRAINT `enroll_ibfk_2` FOREIGN KEY (`uid`) REFERENCES `student` (`uid`);

--
-- Constraints for table `forum`
--
ALTER TABLE `forum`
  ADD CONSTRAINT `forum_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`);

--
-- Constraints for table `forum_reply`
--
ALTER TABLE `forum_reply`
  ADD CONSTRAINT `forum_reply_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`),
  ADD CONSTRAINT `forum_reply_ibfk_2` FOREIGN KEY (`fid`) REFERENCES `forum` (`fid`);

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`);

--
-- Constraints for table `submission`
--
ALTER TABLE `submission`
  ADD CONSTRAINT `submission_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `student` (`uid`),
  ADD CONSTRAINT `submission_ibfk_2` FOREIGN KEY (`assID`) REFERENCES `assignment` (`assID`);

--
-- Constraints for table `teacher`
--
ALTER TABLE `teacher`
  ADD CONSTRAINT `teacher_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
