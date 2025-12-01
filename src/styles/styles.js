import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  inputArea: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 10,
    fontSize: 16,
  },

  button: {
    backgroundColor: 'black',
    padding: 12,
    marginLeft: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 20,
  },

  profileButton: {
    marginTop: 25,
    padding: 20,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
  },

  profileText: {
    textAlign: 'center',
    fontSize: 16,
  },
});
