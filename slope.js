var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Draw the hill
ctx.beginPath();
ctx.moveTo(0, 650);
ctx.lineTo(500, 200);
ctx.lineTo(1000, 650);
ctx.closePath();
ctx.fillStyle = "white";
ctx.fill();

// Draw trees
ctx.fillStyle = "brown";
ctx.fillRect(150, 550, 40, 100);
ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(170, 450);
ctx.lineTo(190, 550);
ctx.lineTo(150, 550);
ctx.closePath();
ctx.fill();

ctx.fillStyle = "brown";
ctx.fillRect(850, 550, 40, 100);
ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(870, 450);
ctx.lineTo(890, 550);
ctx.lineTo(850, 550);
ctx.closePath();
ctx.fill();

ctx.fillStyle = "gray";
ctx.beginPath();
ctx.moveTo(500, 610);
ctx.lineTo(530, 570);
ctx.lineTo(550, 610);
ctx.lineTo(520, 630);
ctx.closePath();
ctx.fill();

ctx.fillStyle = "gray";
ctx.beginPath();
ctx.moveTo(650, 630);
ctx.lineTo(680, 590);
ctx.lineTo(700, 630);
ctx.lineTo(670, 650);
ctx.closePath();
ctx.fill();

ctx.fillStyle = "gray";
ctx.beginPath();
ctx.moveTo(400, 620);
ctx.lineTo(430, 590);
ctx.lineTo(450, 620);
ctx.lineTo(420, 640);
ctx.closePath();
ctx.fill();

ctx.fillStyle = "gray";
ctx.beginPath();
ctx.moveTo(750, 600);
ctx.lineTo(780, 570);
ctx.lineTo(800, 600);
ctx.lineTo(770, 620);
ctx.closePath
// var canvas, context, canvaso, contexto;
// canvaso = document.getElementById('imageView');
// context = canvaso.getContext('2d');
// context.lineWidth = 5;

// context.lineWidth = 4;

// context.lineWidth = 3;

// context.lineWidth = 2;

// context.strokeStyle = '#ffffff';
// context.beginPath();
// context.moveTo(0, 1000);

// context.lineTo(1, 499);
// context.stroke();

// context.lineTo(3, 498);
// context.stroke();

// context.lineTo(4, 498);
// context.stroke();

// context.lineTo(6, 496);
// context.stroke();

// context.lineTo(8, 495);
// context.stroke();

// context.lineTo(12, 494);
// context.stroke();

// context.lineTo(15, 492);
// context.stroke();

// context.lineTo(18, 491);
// context.stroke();

// context.lineTo(20, 490);
// context.stroke();

// context.lineTo(21, 490);
// context.stroke();

// context.lineTo(22, 490);
// context.stroke();

// context.lineTo(23, 489);
// context.stroke();

// context.lineTo(24, 488);
// context.stroke();

// context.lineTo(26, 487);
// context.stroke();

// context.lineTo(27, 487);
// context.stroke();

// context.lineTo(28, 486);
// context.stroke();

// context.lineTo(29, 486);
// context.stroke();

// context.lineTo(30, 484);
// context.stroke();

// context.lineTo(33, 483);
// context.stroke();

// context.lineTo(35, 482);
// context.stroke();

// context.lineTo(37, 481);
// context.stroke();

// context.lineTo(38, 480);
// context.stroke();

// context.lineTo(40, 478);
// context.stroke();

// context.lineTo(42, 476);
// context.stroke();

// context.lineTo(44, 475);
// context.stroke();

// context.lineTo(46, 473);
// context.stroke();

// context.lineTo(48, 471);
// context.stroke();

// context.lineTo(50, 470);
// context.stroke();

// context.lineTo(52, 468);
// context.stroke();

// context.lineTo(53, 467);
// context.stroke();

// context.lineTo(55, 466);
// context.stroke();

// context.lineTo(59, 462);
// context.stroke();

// context.lineTo(65, 459);
// context.stroke();

// context.lineTo(69, 456);
// context.stroke();

// context.lineTo(73, 454);
// context.stroke();

// context.lineTo(76, 451);
// context.stroke();

// context.lineTo(81, 449);
// context.stroke();

// context.lineTo(83, 448);
// context.stroke();

// context.lineTo(84, 447);
// context.stroke();

// context.lineTo(85, 447);
// context.stroke();

// context.lineTo(88, 446);
// context.stroke();

// context.lineTo(96, 444);
// context.stroke();

// context.lineTo(105, 442);
// context.stroke();

// context.lineTo(115, 439);
// context.stroke();

// context.lineTo(125, 436);
// context.stroke();

// context.lineTo(135, 434);
// context.stroke();

// context.lineTo(146, 430);
// context.stroke();

// context.lineTo(158, 427);
// context.stroke();

// context.lineTo(167, 426);
// context.stroke();

// context.lineTo(175, 425);
// context.stroke();

// context.lineTo(179, 424);
// context.stroke();

// context.lineTo(179, 423);
// context.stroke();

// context.lineTo(180, 423);
// context.stroke();

// context.lineTo(181, 423);
// context.stroke();

// context.lineTo(183, 422);
// context.stroke();

// context.lineTo(188, 420);
// context.stroke();

// context.lineTo(195, 417);
// context.stroke();

// context.lineTo(201, 414);
// context.stroke();

// context.lineTo(208, 410);
// context.stroke();

// context.lineTo(215, 405);
// context.stroke();

// context.lineTo(221, 401);
// context.stroke();

// context.lineTo(233, 396);
// context.stroke();

// context.lineTo(242, 390);
// context.stroke();

// context.lineTo(250, 386);
// context.stroke();

// context.lineTo(258, 382);
// context.stroke();

// context.lineTo(265, 378);
// context.stroke();

// context.lineTo(269, 376);
// context.stroke();

// context.lineTo(272, 374);
// context.stroke();

// context.lineTo(275, 373);
// context.stroke();

// context.lineTo(277, 372);
// context.stroke();

// context.lineTo(280, 370);
// context.stroke();

// context.lineTo(286, 366);
// context.stroke();

// context.lineTo(292, 362);
// context.stroke();

// context.lineTo(298, 359);
// context.stroke();

// context.lineTo(303, 356);
// context.stroke();

// context.lineTo(308, 354);
// context.stroke();

// context.lineTo(313, 351);
// context.stroke();

// context.lineTo(318, 350);
// context.stroke();

// context.lineTo(322, 348);
// context.stroke();

// context.lineTo(326, 347);
// context.stroke();

// context.lineTo(332, 345);
// context.stroke();

// context.lineTo(338, 343);
// context.stroke();

// context.lineTo(344, 341);
// context.stroke();

// context.lineTo(349, 340);
// context.stroke();

// context.lineTo(352, 340);
// context.stroke();

// context.lineTo(355, 339);
// context.stroke();

// context.lineTo(359, 338);
// context.stroke();

// context.lineTo(364, 337);
// context.stroke();

// context.lineTo(369, 336);
// context.stroke();

// context.lineTo(373, 335);
// context.stroke();

// context.lineTo(375, 334);
// context.stroke();

// context.lineTo(378, 333);
// context.stroke();

// context.lineTo(382, 331);
// context.stroke();

// context.lineTo(385, 330);
// context.stroke();

// context.lineTo(387, 329);
// context.stroke();

// context.lineTo(390, 327);
// context.stroke();

// context.lineTo(399, 322);
// context.stroke();

// context.lineTo(407, 317);
// context.stroke();

// context.lineTo(413, 314);
// context.stroke();

// context.lineTo(421, 310);
// context.stroke();

// context.lineTo(426, 306);
// context.stroke();

// context.lineTo(430, 302);
// context.stroke();

// context.lineTo(434, 298);
// context.stroke();

// context.lineTo(436, 296);
// context.stroke();

// context.lineTo(438, 294);
// context.stroke();

// context.lineTo(441, 291);
// context.stroke();

// context.lineTo(445, 287);
// context.stroke();

// context.lineTo(450, 283);
// context.stroke();

// context.lineTo(454, 280);
// context.stroke();

// context.lineTo(457, 278);
// context.stroke();

// context.lineTo(461, 274);
// context.stroke();

// context.lineTo(464, 270);
// context.stroke();

// context.lineTo(468, 268);
// context.stroke();

// context.lineTo(470, 265);
// context.stroke();

// context.lineTo(473, 264);
// context.stroke();

// context.lineTo(474, 261);
// context.stroke();

// context.lineTo(479, 258);
// context.stroke();

// context.lineTo(480, 256);
// context.stroke();

// context.lineTo(482, 255);
// context.stroke();

// context.lineTo(483, 254);
// context.stroke();

// context.lineTo(484, 254);
// context.stroke();

// context.lineTo(485, 252);
// context.stroke();

// context.lineTo(486, 251);
// context.stroke();

// context.lineTo(488, 250);
// context.stroke();

// context.lineTo(490, 248);
// context.stroke();

// context.lineTo(493, 246);
// context.stroke();

// context.lineTo(496, 243);
// context.stroke();

// context.lineTo(498, 242);
// context.stroke();

// context.lineTo(500, 240);
// context.stroke();

// context.lineTo(502, 238);
// context.stroke();

// context.lineTo(505, 236);
// context.stroke();

// context.lineTo(506, 234);
// context.stroke();

// context.lineTo(509, 232);
// context.stroke();

// context.lineTo(511, 229);
// context.stroke();

// context.lineTo(514, 227);
// context.stroke();

// context.lineTo(514, 226);
// context.stroke();

// context.lineTo(515, 225);
// context.stroke();

// context.lineTo(516, 222);
// context.stroke();

// context.lineTo(517, 220);
// context.stroke();

// context.lineTo(518, 217);
// context.stroke();

// context.lineTo(520, 213);
// context.stroke();

// context.lineTo(521, 210);
// context.stroke();

// context.lineTo(522, 207);
// context.stroke();

// context.lineTo(522, 204);
// context.stroke();

// context.lineTo(523, 202);
// context.stroke();

// context.lineTo(523, 199);
// context.stroke();

// context.lineTo(525, 196);
// context.stroke();

// context.lineTo(526, 193);
// context.stroke();

// context.lineTo(526, 191);
// context.stroke();

// context.lineTo(527, 188);
// context.stroke();

// context.lineTo(528, 186);
// context.stroke();

// context.lineTo(530, 183);
// context.stroke();

// context.lineTo(531, 180);
// context.stroke();

// context.lineTo(532, 179);
// context.stroke();

// context.lineTo(534, 176);
// context.stroke();

// context.lineTo(535, 174);
// context.stroke();

// context.lineTo(538, 171);
// context.stroke();

// context.lineTo(539, 170);
// context.stroke();

// context.lineTo(540, 167);
// context.stroke();

// context.lineTo(541, 167);
// context.stroke();

// context.lineTo(541, 166);
// context.stroke();

// context.lineTo(542, 166);
// context.stroke();

// context.lineTo(543, 166);
// context.stroke();

// context.lineTo(544, 165);
// context.stroke();

// context.lineTo(546, 163);
// context.stroke();

// context.lineTo(548, 162);
// context.stroke();

// context.lineTo(550, 162);
// context.stroke();

// context.lineTo(553, 161);
// context.stroke();

// context.lineTo(555, 160);
// context.stroke();

// context.lineTo(559, 159);
// context.stroke();

// context.lineTo(564, 157);
// context.stroke();

// context.lineTo(569, 156);
// context.stroke();

// context.lineTo(571, 155);
// context.stroke();

// context.lineTo(573, 154);
// context.stroke();

// context.lineTo(575, 153);
// context.stroke();

// context.lineTo(576, 153);
// context.stroke();

// context.lineTo(578, 153);
// context.stroke();

// context.lineTo(579, 153);
// context.stroke();

// context.lineTo(580, 152);
// context.stroke();

// context.lineTo(581, 152);
// context.stroke();

// context.lineTo(582, 152);
// context.stroke();

// context.lineTo(584, 152);
// context.stroke();

// context.lineTo(586, 151);
// context.stroke();

// context.lineTo(587, 151);
// context.stroke();

// context.lineTo(588, 150);
// context.stroke();

// context.lineTo(590, 150);
// context.stroke();

// context.lineTo(591, 150);
// context.stroke();

// context.lineTo(593, 149);
// context.stroke();

// context.lineTo(594, 148);
// context.stroke();

// context.lineTo(596, 147);
// context.stroke();

// context.lineTo(650, 0);
// context.stroke();