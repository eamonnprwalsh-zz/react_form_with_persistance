 
import { createTransform } from 'redux-persist';
 /**
 * Transforms state on its way to being serialized and persisted
 * @param inboundState
 * @param config
 * @return {*}
 */
  const transformPersistence = (inboundState, config) => {
    //TODO: Do we want to persist if timeout reached on given cache
    inboundState = inboundState || {};
    inboundState = Object.assign({}, inboundState, {
      [config.persistedAtKey]: new Date().getTime(),
    });
    return inboundState;
  };
  
  /**
   * Transform state being rehydrated
   * @param outboundState
   * @param config
   * @return {*}
   */
  const transformRehydrate = (outboundState, config) => {
    outboundState = outboundState || {};
    if (config.expireMs) {
      const startTime = new Date(outboundState[config.persistedAtKey]).getTime();
      const endTime = new Date().getTime();
      if ( (endTime - startTime) > config.expireMs) {
        return Object.assign({}, config.expiredState);
      } 
    }
    return outboundState;
  };
  
  /**
   * Creates transform object with the given expiry configuration
   * @param reducerKey
   * @param config
   * @return {Transform<{}, any>}
   */
  export default function reduxExpire(reducerKey, config = {}) {
    
    const defaults = {
      persistedAtKey: '_cache',
      expireSeconds: null,
      expiredState: {},
    };
  
    config = Object.assign({}, defaults, config);
  
    return createTransform(
      (inboundState) => transformPersistence(inboundState, config),
      (outboundState) => transformRehydrate(outboundState, config),
      {
        whitelist: [reducerKey],
      }
    );
  } 