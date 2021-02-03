const svxPosition = artifacts.require('svxPosition');

module.exports = function (deployer) {
	deployer.deploy(
		svxPosition,
		'0x4de23298e35ce9b81c462edacc898b8e08bc656f',
		'0x796a41d78bb36e87ed05e55763311fae3eea0a85'
	);
};
