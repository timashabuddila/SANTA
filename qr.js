/* Copyright (C) 2021 T-REX
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License
T-REX HIRUWA
*/

const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');

async function whatsAsena() {
	const conn = new WAConnection();
	conn.logger.level = 'warn';
	conn.version = [2, 2143, 3];

	conn.on('connecting', async () => {
		console.log(`${chalk.green.bold('DARK')}${chalk.blue.bold('MAX')}
${chalk.white.italic('DarkMaxString')}
${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please wait.')}`);
	});

	conn.on('open', async () => {
		console.log(
			chalk.green.bold('DarkMax QR Code: '),
			'' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo()))
		);
		await conn.sendMessage(
			conn.user.jid,
			'' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())),
			MessageType.text
		);
		if (conn.user.jid.startsWith('90')) {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Please Do Not Share This Code With Anyone ' +
					conn.user.name +
					'* ⚠️\n\npowerd by dark max',
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Please Do Not Share This Code With Anyone ' +
					conn.user.name +
					'* ⚠️\n\npwoerd by dark max',
				MessageType.text
			);
		}
		console.log(
			chalk.green.bold(
				"IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!\nඔබට කොපි කර ගැනීමට නොහැකි නම් ඔබගේ නම්බර් එකට පණිවිඩයක් මගින් කේතය ලැබේ"
			),
			chalk.green.bold(
				'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!\nඔබට කොපි කර ගැනීමට නොහැකි නම් ඔබගේ නම්බර් එකට පණිවිඩයක් මගින් කේතය ලැබේ'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

whatsAsena();
