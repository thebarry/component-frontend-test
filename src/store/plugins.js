import createLogger from 'vuex/dist/logger';

const debug = process.env.NODE_ENV !== 'production';

export default debug ? [createLogger()] : [];
