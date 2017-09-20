import Member from '../models/member';
import BaseController from './base.controller';

class MembersController extends BaseController {

	whitelist = [
		'firstName',
		'lastName',
		'birthDate',
	];

	search = async (req, res, next) => {
		try {
			res.json(await Member.find());
		} catch (err) {
			next(err);
		}
	};

	create = async (req, res, next) => {
		const params = this.filterParams(req.body, this.whitelist);

		const member = new Member({
			...params,
		});

		try {
			res.status(201).json(await member.save());
		} catch (err) {
			next(err);
		}
	};

}

export default new MembersController();
